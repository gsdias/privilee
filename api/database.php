<?php

class database
{
    protected $originalDatabase;
    protected $dataJson;
    protected $filtered;
    // -- Function Name : __construct
    // -- Purpose : construct the object and filter
    public function __construct($file = '')
    {
        
        $this->originalDatabase = file_get_contents($file);
        $this->dataJson = json_decode($this->originalDatabase);
        $this->filtered = [];
    }
    // -- Function Name : resetFilter
    // -- Params :
    // -- Purpose : outputs database
    public function resetFilter()
    {
        $this->filtered = [];
    }
    // -- Function Name : filtered
    // -- Params :
    // -- Purpose : add item to filter
    public function filtered($item)
    {
        $this->filtered[] = $item;
    }
    public function generateXML($data) {
        $xmlDoc = new DOMDocument();
        
        $root = $xmlDoc->appendChild($xmlDoc->createElement("root"));
        
        foreach($data as $item) {
            $xmlItem = $root->appendChild($xmlDoc->createElement('item'));
            foreach($item as $key => $val){
                $xmlItem->appendChild($xmlDoc->createElement($key, $val));
            }
        }
        
        $xmlDoc->formatOutput = true;
        
        return $xmlDoc->saveXML();
    }
    // -- Function Name : output
    // -- Params :
    // -- Purpose : outputs database
    public function output($type = '')
    {
        header('Content-type: application/' . $type);

        if ($type == 'json') {
            echo json_encode(array_filter($this->filtered));
            return;
        }
        if ($type == 'xml') {
            echo $this->generateXML($this->filtered);
            return;
        }

        return $this->dataJson;
    }
}